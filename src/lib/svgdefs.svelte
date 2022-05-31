<script>

import { Color, colorMap } from "../types";

</script>
<svg style="height: 0vh; width: 0vh;" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <pattern id="pr" patternUnits="userSpaceOnUse" width="10" height="10" mask-type="alpha">
            <path d='M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2' stroke={colorMap[Color.Red]} stroke-width='2'/>
        </pattern>
    </defs>
    <defs>
        <pattern id="pg" patternUnits="userSpaceOnUse" width="10" height="10" mask-type="alpha">
            <path d='M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2' stroke={colorMap[Color.Green]} stroke-width='2'/>
        </pattern>
    </defs>
    <defs>
        <pattern id="pp" patternUnits="userSpaceOnUse" width="10" height="10" mask-type="alpha">
            <path d='M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2' stroke={colorMap[Color.Purple]} stroke-width='2'/>
        </pattern>
    </defs>
</svg>