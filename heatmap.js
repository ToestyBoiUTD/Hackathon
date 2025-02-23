
        const canvas = document.getElementById("heatmapCanvas");
        const ctx = canvas.getContext("2d");

        let isHolding = false;
        let holdStartTime = 0;
        let interval;
        let red = 255;
        function getMousePos(canvas, event) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }

        canvas.addEventListener("mousedown", (event) => {
            isHolding = true;
            holdStartTime = Date.now();
            const pos = getMousePos(canvas, event);
            drawHeatmap(pos.x, pos.y);
            interval = setInterval(() => {
                drawHeatmap(pos.x, pos.y);
            }, 100);
        });

        canvas.addEventListener("mouseup", () => {
            isHolding = false;
            red = 255;
            clearInterval(interval);
        });

        function drawHeatmap(x, y) {
            if (!isHolding) return;
            const timeHeld = (Date.now() - holdStartTime) / 2000; // time in half seconds
            let opacity = Math.min(timeHeld / 2, 1); // max opacity = 1
            ctx.beginPath();
            ctx.arc(x, y, 20 + timeHeld * 10, 0, Math.PI * 2); // Bigger circle over time
            ctx.fillStyle = `rgba(${red}, 0, 0, ${opacity})`; // Darker red over time
            ctx.fill();
            red -= 2.5;
        }