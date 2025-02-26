const dscc = require('@google/dscc');
const d3 = require('d3');

function drawViz(data) {
    const container = document.getElementById('viz');
    container.innerHTML = ''; // Clear previous content

    // Create a question mark icon
    const questionMark = document.createElement('div');
    questionMark.innerHTML = '?';
    questionMark.style.fontSize = '24px';
    questionMark.style.cursor = 'pointer';
    questionMark.style.position = 'relative';
    questionMark.style.display = 'inline-block';

    // Create a tooltip div
    const tooltip = document.createElement('div');
    tooltip.innerHTML = data.tables.DEFAULT[0].tooltipText; // Use Looker Studio data field
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.visibility = 'hidden';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.bottom = '30px';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.fontSize = '12px';

    // Show/hide tooltip on hover
    questionMark.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible';
    });
    questionMark.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
    });

    // Append elements
    questionMark.appendChild(tooltip);
    container.appendChild(questionMark);
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
