// 5. Custo da viagem. Leia a distância até o destino em km, o consumo do carro em km/l e o preço do litro. Exiba o custo de ida e volta e o custo por km.

const distanceKm = Number(prompt("Distância até o destino (km):"));
const fuelConsumption = Number(prompt("Consumo do carro (km/l):"));
const fuelPrice = Number(prompt("Preço do litro do combustível:"));

const roundTripDistance = distanceKm * 2;
const fuelNeeded = roundTripDistance / fuelConsumption;
const totalCost = fuelNeeded * fuelPrice;
const costPerKm = totalCost / roundTripDistance;

console.log(`Custo de ida e volta: R$ ${totalCost.toFixed(2)}`);
console.log(`Custo por km: R$ ${costPerKm.toFixed(2)}`);