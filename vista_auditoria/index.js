
 
        const inputContainer = document.querySelector('.resizable-input-container');
        let isResizing = false;

        inputContainer.addEventListener('mousedown', (e) => {
            if (e.target === inputContainer.querySelector('::after')) {
                isResizing = true;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isResizing) {
                const containerRect = inputContainer.getBoundingClientRect();
                const newWidth = e.clientX - containerRect.left;
                const newHeight = e.clientY - containerRect.top;
                inputContainer.style.width = `${Math.max(newWidth, 50)}px`; // Mínimo 50px
                inputContainer.style.height = `${Math.max(newHeight, 30)}px`; // Mínimo 30px
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
        });
