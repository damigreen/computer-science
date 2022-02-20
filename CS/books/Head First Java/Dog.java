public class Dog {
    int size;
    String breed;
    String name;

    void bark() {
        System.out.println("Ruff! Ruff");
    }

    String sayName() {
        return "My name is " + name;
    }
}

class DogTestDrive {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.size = 40;
        d.name = "Shadow";
        String name = d.sayName();
        System.out.println(name);
        d.bark();
        Dog[] pets;
        pets = new Dog[7];

        pets[0] = new Dog();
        pets[0].size = 12;
        pets[0].breed = "German Shepard";
        System.out.println(pets[0].breed);


        pets[1] = new Dog();
        pets[1].size = 13;
        System.out.println(pets[1].size);

        pets[3] = d;
        pets[3].bark();

        System.out.println("last dogs name is ");
        System.out.println(pets[3].name);

        int x = 0;
        while(x < pets.length) {
            System.out.println(pets.length);
            pets[x].bark();
            x = x + 1;
        }
    }
}
