import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

// Your First Program

class dynamic_array {
    public static void main(String[] args) {
        List<List<Integer>> arr = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            arr.add(new ArrayList<>());
        }
        arr.get(0).add(1);
        arr.get(0).add(0);
        arr.get(0).add(5);

        arr.get(1).add(1);
        arr.get(1).add(1);
        arr.get(1).add(7);

        arr.get(2).add(1);
        arr.get(2).add(0);
        arr.get(2).add(3);

        arr.get(3).add(2);
        arr.get(3).add(1);
        arr.get(3).add(0);

        arr.get(4).add(2);
        arr.get(4).add(1);
        arr.get(4).add(1);

        List<Integer> x = arr.get(1);
        int score = x.get(2);
        System.out.println(score);

        System.out.println("arr >>--------->");
        System.out.println(arr);
        System.out.println(arr.get(1));

        // [[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]
        // [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
        List<Integer> result = dynamicArray(2, arr);
        System.out.println(result);
    }

    public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {
        List<List<Integer>> arr = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            arr.add(new ArrayList<Integer>());
        }

        int lastAnswer = 0;
        List<Integer> results = new ArrayList<>();

        for (List<Integer> q : queries) {
            int index = ((q.get(1) ^ lastAnswer) % n);
            int y = q.get(2);

            switch (q.get(0)) {
                case 1:
                    arr.get(index).add(y);
                    break;
                case 2:
                    int size = arr.get(index).size();
                    lastAnswer = arr.get(index).get(y % size);
                    results.add(lastAnswer);
                    break;
            }
        }
        // for (List<Integer> q: queries) {
        //     System.out.println(q);
        // }
        return results;
    }
}
