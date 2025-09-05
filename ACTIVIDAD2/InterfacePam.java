import javax.swing.*;

class InicioPAM {
    public String ReglamentoPoo() {
        return "Reglamento de Programacion De aplicaciones Moviles"
                + "\n1. Se requiere el 80% de asistencia para aprobar el curso."
                + "\n2. Se permiten 10 minutos de tolerancia para llegar a clase."
                + "\n3. Las faltas deben estar justificadas mediante el correo institucional con un plazo max de 24 horas."
                + "\n4. Las tareas y trabajos deberan subirlas al Classroom de manera individual."
                + "\n5. Utilizar el correo institucional para trabajar en la plataforma de Classroom.";
    }

    public String LineamientosClassroom() {
        return "Lineamientos de Classroom"
                + "\n1. Darle a entregar una vez se sube el trabajo."
                + "\n2. Registrarse en la clase con el correo institucional."
                + "\n3. No se calificarán trabajos fuera de tiempo.";
    }

    public String FechasDeParciales() {
        return "Fechas de Parciales"
                + "\n1er Parcial: 30/09/25 - 04/10/25"
                + "\n2do Parcial: 04/10/25 - 02/12/25"
                + "\n3er Parcial: 02/12/25 - 20/12/25";
    }

    public String PorcentajesPorParcial() {
        return "Porcentajes por Parcial"
                + "\n1er Parcial: 40% examen, 30% tareas, 20% participación, 10% PI"
                + "\n2do Parcial: 40% examen, 20% tareas, 20% participación, 20% PI"
                + "\n3er Parcial: 20% examen, 40% tareas, 10% participación, 30% PI";
    }
}

public class InterfacePam {  
    public static void main(String[] args) {
        InicioPAM inicio = new InicioPAM();
        boolean continuar = true;

        while (continuar) {
            String opcion = JOptionPane.showInputDialog(
                    "Menú PAM\n" +
                    "1. Reglamento POO\n" +
                    "2. Lineamientos Classroom\n" +
                    "3. Fechas de Parciales\n" +
                    "4. Porcentajes por Parcial\n" +
                    "5. Salir\n\n" +
                    "Ingresa una opción:");

            if (opcion == null) { 
                break;
            }

            switch (opcion) {
                case "1":
                    JOptionPane.showMessageDialog(null, inicio.ReglamentoPoo(), "Reglamento", JOptionPane.INFORMATION_MESSAGE);
                    break;
                case "2":
                    JOptionPane.showMessageDialog(null, inicio.LineamientosClassroom(), "Lineamientos", JOptionPane.INFORMATION_MESSAGE);
                    break;
                case "3":
                    JOptionPane.showMessageDialog(null, inicio.FechasDeParciales(), "Fechas", JOptionPane.INFORMATION_MESSAGE);
                    break;
                case "4":
                    JOptionPane.showMessageDialog(null, inicio.PorcentajesPorParcial(), "Porcentajes", JOptionPane.INFORMATION_MESSAGE);
                    break;
                case "5":
                    continuar = false;
                    JOptionPane.showMessageDialog(null, "¡Gracias por usar la app PAM!");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Opción inválida, intenta de nuevo.");
            }
        }
    }
}
