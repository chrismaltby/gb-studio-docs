#pragma bank 255

#include <gbdk/platform.h>
#include "vm.h"

void my_native_function(SCRIPT_CTX * THIS) OLDCALL BANKED {
    // inverse DMG palette several times:
    for (uint8_t i = *(int16_t*)VM_REF_TO_PTR(FN_ARG0); i != 0; i--) {
        BGP_REG = ~BGP_REG;
        OBP1_REG = ~OBP1_REG;
        OBP0_REG = ~OBP0_REG;
        if (i) wait_vbl_done();
    }
}
