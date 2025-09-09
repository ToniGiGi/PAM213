class CArreglo {

    static double obtenerPromedio(int a[]) {
        double total = 0;

        for (int i = 0; i < a.length; i++) {
            total += a[i];
        }

        return total / a.length;
    }

    // Método para imprimir los elementos del arreglo
    static void imprimir(int a[]) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println(); // salto de línea al final
    }

    // Método para obtener el mayor de los elementos
    static int obtenerMayor(int a[]) {
        int mayor = a[0]; // suponemos que el primero es el mayor
        for (int i = 1; i < a.length; i++) {
            if (a[i] > mayor) {
                mayor = a[i];
            }
        }
        return mayor;
    }

    public static void main(String[] args) {
        int edades[] = {19, 23, 21, 20, 24, 20};

        imprimir(edades);
        System.out.println("Promedio: " + obtenerPromedio(edades));
        System.out.println("Mayor: " + obtenerMayor(edades));
    }
}
