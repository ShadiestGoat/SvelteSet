<script lang="ts">
    import { Color, colorMap, Fill, Shape, type setCard } from "../types";

    export let card:setCard

    let d = ""

    function transformFunc(totalObjs:number, curI:number) {
        const h = 296
        let margin = (h-80*totalObjs)/(totalObjs+1)
        return Math.round(margin*(curI+1)+80*curI)
    }

    let stupid = card[0] == "1" ? [0] : card[0] == "2" ? [0,1] : [0,1,2]
    let color = colorMap[card[2] as Color]

    switch (card[1] as Shape) {
        case Shape.Oval:
            d = "M42,2 l126,0 a15,15,180,0,1,0,80 l-126,0 a15,15,180,0,1,0,-80z"
            break
        case Shape.Worm:
            d = "m135.1 25.53c15.18 0 27.03-14.15 37.42-20.81 15.18-8.324 32.22 4.162 34.72 19.77 4.158 23.93-12.99 47.86-32.22 58.27-23.91 13.01-51.97 8.324-77.96 0-15.18-6.243-32.22-4.162-47.81 4.162-8.315 4.162-17.67 13.01-25.99 13.01-10.81 0-17.67-10.82-19.75-19.77-4.573-18.73 2.079-40.58 13.1-56.81 8.315-10.82 23.91-17.06 38.87-17.06 19.75 0 38.98 8.324 57.69 15.19 6.237 2.081 15.18 4.162 21.83 4.162z"
            break
        case Shape.Rombus:
            d = "M6,42L105,2L204,37L105,72L6,37z"
            break
    }

    let fill = ""

    switch (card[3] as Fill) {
        case Fill.Empty:
            fill = "transparent"
            break
        case Fill.Full:
            fill = color
            break
        case Fill.Striped:
            fill = "url(#p" + card[2] + ")"
            break
    }
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 300">
    {#each stupid as ind (ind)}
        <path 
            id="{ind.toString()}"
            d={d}
            stroke-width="4"
            transform="translate(0,{transformFunc(parseInt(card[0]), ind)})"
            stroke={color}
            fill={fill}
        />
    {/each}
</svg>
