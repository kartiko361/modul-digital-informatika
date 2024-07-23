document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.card');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const cardTitle = this.querySelector('.card-title').textContent;
            if (cardTitle === 'Buku Bahan Ajar') {
                $('#kelasModal').modal('show');
            } else {
                alert(`Anda mengklik ${cardTitle}`);
            }
        });
    });
});
