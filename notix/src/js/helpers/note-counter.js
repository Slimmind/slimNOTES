export default function noteCounter() {
    // const colorArr = [{color: "#0433ff", qty: 1}, {color: "#942192", qty: 1}];
    const colors = [];
    const filterTemplate = `<strong></strong>` 

    for (const item of vars.tempStore) {
        if (item.itemType === "note") {
            colors.push(item.itemColor);
        }
    }

    const colorCount = colors.reduce((total, color) => {
        total[color] = (total[color] || 0) + 1;
        return total;
    }, {});


    console.log("COLORS", colorCount);
}