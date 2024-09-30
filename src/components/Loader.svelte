
<div class="loader"></div>

<style>
/* HTML: <div class="loader"></div> */
.loader {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent-color);
  box-shadow: 0 0 0 0 var(--accent-color-dim);
  animation: l1 1s infinite;
}
@keyframes l1 {
    100% {box-shadow: 0 0 0 30px var(--accent-color)}
}
</style>