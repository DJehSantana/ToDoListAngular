export function criarHistorico(method: string, message: string) {
    const dataHora: string = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
    return `${dataHora}: ${method.toUpperCase()} - ${message}`;
}