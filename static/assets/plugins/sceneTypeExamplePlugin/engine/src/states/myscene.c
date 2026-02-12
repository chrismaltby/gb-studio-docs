#pragma bank 255

#include "data/states_defines.h"
#include "states/myscene.h"

#include "actor.h"
#include "camera.h"
#include "collision.h"
#include "data_manager.h"
#include "game_time.h"
#include "input.h"
#include "trigger.h"
#include "math.h"
#include "vm.h"

#define ONE_TILE        TILE_TO_SUBPX(1)
#define WAIT_TIME       8

#define COIN_TILE       128

#define PLAYER_COLLISION_SCRIPT_GROUP_1 2

#define COLLISION_GROUP_FLAG_1 0x10
#define COLLISION_GROUP_FLAG_2 0x20
#define COLLISION_GROUP_FLAG_3 0x40
#define COLLISION_GROUP_FLAG_4 0x80

#define ENEMY_COLLISION_FLAG COLLISION_GROUP_FLAG_1

UBYTE myscene_move_wait;
void * myscene_script_addr;
UWORD myscene_player_start_x; UWORD myscene_player_start_y;

void myscene_init(void) BANKED {
    camera_offset_x = 0;
    camera_offset_y = 0;
    camera_deadzone_x = 0;
    camera_deadzone_y = 0;

    // Snap player to 8px grid
    PLAYER.pos.x = SUBPX_SNAP_TILE(PLAYER.pos.x);
    PLAYER.pos.y = SUBPX_SNAP_TILE(PLAYER.pos.y);

    myscene_player_start_x = PLAYER.pos.x;
    myscene_player_start_y = PLAYER.pos.y;

    myscene_move_wait = 0;
}

void myscene_update(void) BANKED {
    actor_t *hit_actor;
    UBYTE tile_start, tile_end;
    direction_e new_dir = DIR_NONE;
    UWORD prev_pos_x, prev_pos_y;;

    if (myscene_move_wait > 0) {
        myscene_move_wait--;
        return;
    }

    prev_pos_x = PLAYER.pos.x;
    prev_pos_y = PLAYER.pos.y;

    // Check input to set player movement
    if (INPUT_LEFT) {
        new_dir = DIR_LEFT;

        // Check for collisions to left of player
        tile_start = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.top);
        tile_end   = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.bottom);
        UBYTE tile_x = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.left);
        if (!tile_col_test_range_y(COLLISION_RIGHT, tile_x - 1, tile_start, tile_end)) {
            PLAYER.pos.x -= ONE_TILE;
        }
    } else if (INPUT_RIGHT) {
        new_dir = DIR_RIGHT;

        // Check for collisions to right of player
        tile_start = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.top);
        tile_end   = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.bottom);
        UBYTE tile_x = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.right);
        if (!tile_col_test_range_y(COLLISION_LEFT, tile_x + 1, tile_start, tile_end)) {
            PLAYER.pos.x += ONE_TILE;
        }
    } else if (INPUT_UP) {
        new_dir = DIR_UP;

        // Check for collisions above player
        tile_start = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.left);
        tile_end   = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.right);
        UBYTE tile_y = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.top);
        if (!tile_col_test_range_x(COLLISION_BOTTOM, tile_y - 1, tile_start, tile_end)) {
            PLAYER.pos.y -= ONE_TILE;
        }
    } else if (INPUT_DOWN) {
        new_dir = DIR_DOWN;

        // Check for collisions below player
        tile_start = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.left);
        tile_end   = SUBPX_TO_TILE(PLAYER.pos.x + PLAYER.bounds.right);
        UBYTE tile_y = SUBPX_TO_TILE(PLAYER.pos.y + PLAYER.bounds.bottom);
        if (!tile_col_test_range_x(COLLISION_TOP, tile_y + 1, tile_start, tile_end)) {
            PLAYER.pos.y += ONE_TILE;
        }
    } else {
        return;
    }

    myscene_move_wait = WAIT_TIME;

    // Update direction animation
    if (new_dir != DIR_NONE) {
        actor_set_dir(&PLAYER, new_dir, FALSE);
    }

    // Check for custom collisions
    UBYTE tile_x = SUBPX_TO_TILE(PLAYER.pos.x);
    UBYTE tile_y = SUBPX_TO_TILE(PLAYER.pos.y);
    
    UBYTE tile = tile_at(tile_x, tile_y);

    if (tile & COIN_TILE) {
        // Run Scene's On Player Hit Group 1 script if landed on a coin tile and script isn't already running
        if (PLAYER.script.bank && ((myscene_script_addr == 0) || (((UINT16)myscene_script_addr & SCRIPT_TERMINATED) != 0))) {
            script_execute(
                PLAYER.script.bank,
                PLAYER.script.ptr, &myscene_script_addr, 1,
                PLAYER_COLLISION_SCRIPT_GROUP_1
            );
        }
    }

    // Check for actor collisions
    hit_actor = actor_overlapping_player();
    // if (hit_actor != NULL && (hit_actor->collision_group & COLLISION_GROUP_MASK)) {
    if (hit_actor != NULL) {
        if (hit_actor->collision_group & ENEMY_COLLISION_FLAG) {
            // Enemy collision - reset player to scene start position
            PLAYER.pos.x = myscene_player_start_x;
            PLAYER.pos.y = myscene_player_start_y;
        } else {
            // Non enemy - run the actor's interact script 
            actor_set_dir(hit_actor, FLIPPED_DIR(PLAYER.dir), FALSE);
            player_moving = FALSE;
            if (hit_actor->script.bank) {
                script_execute(hit_actor->script.bank, hit_actor->script.ptr, 0, 1, 0);
            }
            PLAYER.pos.x = prev_pos_x;
            PLAYER.pos.y = prev_pos_y;            
        }
    }

    // Check for trigger collisions
    if (trigger_activate_at_intersection(&PLAYER.bounds, &PLAYER.pos, FALSE)) {
        // Landed on a trigger
        return;
    }
}
