import java.util.ArrayList;

public class SimpleDotCom {
    // int[] locationCells;
    // int numberOfHits = 0;
    private ArrayList<Integer> locationCells;

    public void setLocationCells(ArrayList<Integer> locs) {
        locationCells = locs;
    }

    public String checkYourself(String stringGuess) {
        int guess = Integer.parseInt(stringGuess);
        System.out.println("guess____");
        System.out.println(guess);
        String result = "miss";
        int index = locationCells.indexOf(guess);

        if (index >= 0) {
            locationCells.remove(guess);

            if (locationCells.isEmpty()) {
                result = "kill!";
            } else {
                result = "hit!";
            }
        }
        // for (int cell : locationCells) {
        //     if (guess == cell) {
        //         result = "hit";
        //         numberOfHits++;
        //         break;
        //     }
        // }
        // if (numberOfHits == locationCells.length) {
        //     result = "kill";
        // }
        System.out.println(result);
        return result;
    }

    public static void main(String[] args) {
        int numOfGuesses = 0;
        GameHelper helper = new GameHelper();

        SimpleDotCom theDotCom = new SimpleDotCom();
        int randomNum = (int) (Math.random() * 5);

        // int[] locations = {randomNum, randomNum+1, randomNum+2};
        // ArrayList<String> locations = new ArrayList<String>();
        ArrayList<Integer> locations = new ArrayList<Integer>();

        locations.add(randomNum);
        locations.add(randomNum + 1);
        locations.add(randomNum + 2);
        theDotCom.setLocationCells(locations);
        boolean isAlive = true;

        while (isAlive == true) {
            String guess = helper.getUserInput("enter a number!");

            String result = theDotCom.checkYourself(guess);
            numOfGuesses++;
            if (result.equals("kill")) {
                isAlive = false;
                System.out.println("You took " + numOfGuesses + " guesses");
            }
        }
    }
}
