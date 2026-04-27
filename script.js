document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const item = this.closest('.task-item');
        if (this.checked) {
            item.classList.add('completed');
            item.querySelector('.task-time').textContent = 'Done';
            item.querySelector('.task-time').className = 'task-time';
        } else {
            item.classList.remove('completed');
            item.querySelector('.task-time').textContent = 'Pending';
        }
    });
});

document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
