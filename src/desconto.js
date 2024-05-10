function calcDesconto(quantidade) {
    if (quantidade <= 10) {
        return 0;  // 0% de desconto
    } else if (quantidade <= 20) {
        return 0.10;  // 10% de desconto
    } else if (quantidade <= 50) {
        return 0.25;  // 25% de desconto
    } else {
        return 0.35;  // 35% de desconto
    }
}

module.exports = calcDesconto;