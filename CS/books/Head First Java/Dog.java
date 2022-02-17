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
    }
}
