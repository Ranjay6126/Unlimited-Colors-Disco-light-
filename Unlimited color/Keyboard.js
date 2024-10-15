const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
        <table>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.which || e.keyCode}</td> <!-- Fallback for older browsers -->
                <td>${e.code}</td>
            </tr>
        </table>
    `;
});
