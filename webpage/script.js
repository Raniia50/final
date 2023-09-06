document.addEventListener('DOMContentLoaded', () => {
    axios.get('http://ec2-34-222-4-242.us-west-2.compute.amazonaws.com:3000/data')
        .then((response) => {
            const dataContainer = document.getElementById('data-container');
            const jsonData = JSON.parse(response.data); 

            jsonData.forEach((item) => {
                const row = document.createElement('div');
                row.classList.add('row');

                for (const key in item) {
                    if (item.hasOwnProperty(key)) {
                        const cell = document.createElement('div');
                        cell.classList.add('cell');
                        cell.textContent = item[key];
                        row.appendChild(cell);
                    }
                }

                dataContainer.appendChild(row);
            });
        })
        .catch((error) => {
            console.error('error', error);
        });
});