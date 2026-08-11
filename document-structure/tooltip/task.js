const tooltipTriggers = document.querySelectorAll(".has-tooltip");
let currentTooltip = null;

tooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentTooltip) {
      currentTooltip.remove();
      currentTooltip = null;
    }

    const text = trigger.getAttribute("title");
    if (!text) return;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip tooltip_active";
    tooltip.textContent = text;

    const rect = trigger.getBoundingClientRect();
    tooltip.style.position = "absolute";
    tooltip.style.left = rect.left + window.scrollX + "px";
    tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";

    document.body.appendChild(tooltip);
    currentTooltip = tooltip;
  });
});
