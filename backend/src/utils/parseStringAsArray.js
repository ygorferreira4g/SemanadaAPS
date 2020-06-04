module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => descricao_do_local.trim());
}