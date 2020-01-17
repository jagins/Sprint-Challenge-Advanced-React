export const randomColorGenerator = () =>
{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256)
    const bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    
    return bgColor;
}