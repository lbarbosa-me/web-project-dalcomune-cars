function loadVehicles() {
    try {
        const vehiclesContainer = document.querySelector('.veiculos-bloco');
        if (!vehiclesContainer) {
            console.error('Container not found');
            return;
        }
        
        carDatabase.vehicles.forEach(vehicle => {
            const vehicleCard = `
                <div class="veiculo-info">
                    <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}">
                    <div class="veiculo-detalhes">
                        <h3>${vehicle.brand} ${vehicle.model}</h3>
                        <p>Ano: ${vehicle.year}</p>
                        <p>Preço: ${vehicle.price}</p>
                        <p>Cor: ${vehicle.color}</p>
                        <p>${vehicle.description}</p>
                    </div>
                </div>
            `;
            vehiclesContainer.innerHTML += vehicleCard;
        });
    } catch (error) {
        console.error('Error loading vehicles:', error);
    }
}

function updateDisplay(criteria) {
    try {
        const sortedVehicles = carDatabase.sortVehicles(criteria);
        const vehiclesContainer = document.querySelector('.veiculos-bloco');
        
        if (!vehiclesContainer) {
            console.error('Container not found');
            return;
        }
        
        vehiclesContainer.innerHTML = '';
        
        sortedVehicles.forEach(vehicle => {
            const vehicleCard = `
                <div class="veiculo-info">
                    <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}">
                    <div class="veiculo-detalhes">
                        <h3>${vehicle.brand} ${vehicle.model}</h3>
                        <p>Ano: ${vehicle.year}</p>
                        <p>Preço: ${vehicle.price}</p>
                        <p>Cor: ${vehicle.color}</p>
                        <p>${vehicle.description}</p>
                    </div>
                </div>
            `;
            vehiclesContainer.innerHTML += vehicleCard;
        });
    } catch (error) {
        console.error('Error updating display:', error);
    }
}