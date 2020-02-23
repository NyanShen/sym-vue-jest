export function calculateBottomPosition(stepBtnHeight) {
    let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
    );
    let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
    );
    let innerHeight = window.innerHeight;
    return stepBtnHeight - (scrollHeight - scrollTop - innerHeight)
}