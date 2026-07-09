public class Main {
    public static void main(String[] args) {
        // Instanciando o carro
        CarroEletrico meuCarro = new CarroEletrico("Tesla Model 3");
        
        System.out.println("Modelo do carro: " + meuCarro.getModelo());
        System.out.println("-----------------------------------");

        // 1. Tentar acelerar várias vezes para testar o limite de velocidade
        System.out.println("TESTE: Acelerando o carro...");
        for (int i = 0; i < 7; i++) {
            meuCarro.acelerar();
        }

        System.out.println("\n-----------------------------------");
        
        // 2. Tentar carregar a bateria com o carro em movimento (deve exibir erro)
        System.out.println("TESTE: Tentando carregar em movimento...");
        meuCarro.carregarBateria();

        System.out.println("\n-----------------------------------");

        // 3. Frear o carro até parar totalmente
        System.out.println("TESTE: Freando até parar...");
        while (meuCarro.getVelocidadeAtual() > 0) {
            meuCarro.frear();
        }

        System.out.println("\n-----------------------------------");

        // 4. Carregar o carro parado (deve funcionar)
        System.out.println("TESTE: Carregando bateria com carro parado...");
        meuCarro.carregarBateria();
    }
}