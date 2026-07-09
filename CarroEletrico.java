public class CarroEletrico {
    // Atributos privados
    private String modelo;
    private int velocidadeAtual;
    private int cargaBateria;

    // Construtor
    public CarroEletrico(String modelo) {
        this.modelo = modelo;
        this.velocidadeAtual = 0;
        this.cargaBateria = 100;
    }

    // Getters e Setters
    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }

    public int getCargaBateria() {
        return cargaBateria;
    }

    // Regras de Negócio (Métodos)
    public void acelerar() {
        if (this.cargaBateria <= 0) {
            System.out.println("ERRO: Bateria em 0%. Não é possível acelerar.");
            return;
        }
        
        if (this.velocidadeAtual >= 120) {
            System.out.println("ERRO: Velocidade máxima de 120 km/h atingida.");
            return;
        }
        
        this.velocidadeAtual += 20;
        this.cargaBateria -= 5;
        System.out.println("Acelerou -> Velocidade: " + this.velocidadeAtual + " km/h | Bateria: " + this.cargaBateria + "%");
    }

    public void frear() {
        this.velocidadeAtual -= 20;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        System.out.println("Freou -> Velocidade atual: " + this.velocidadeAtual + " km/h");
    }

    public void carregarBateria() {
        if (this.velocidadeAtual == 0) {
            this.cargaBateria = 100;
            System.out.println("SUCESSO: Bateria recarregada para 100%.");
        } else {
            System.out.println("ERRO: Não é possível carregar a bateria com o carro em movimento.");
        }
    }
}