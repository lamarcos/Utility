import java.io.*;
public class RenversFiles {

    public static void main(String[] args) throws IOException {
	// write your code here
        System.out.println("Hello, World");
        FileInputStream fin = new FileInputStream("C:\\file.old");

        byte bytes[] = fin.readAllBytes();
        byte resultat[] = new byte[bytes.length] ;
        System.out.println(bytes.length);

        for(int i=bytes.length - 1, j = 0;i >= 0; i--, j++) {
            resultat[j] = bytes[i];

        }
        System.out.println(resultat.length);
        FileOutputStream sortie = new FileOutputStream("C:\\file.new");
        sortie.write(resultat);
        sortie.close();

    }
}
