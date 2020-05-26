export default function resizeEvent(): void {
    setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
    }, 300);
}
