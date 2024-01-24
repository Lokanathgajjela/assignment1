package com.LOKA.PACK1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
       
        Integer[] originalArray = {1, 2, 3, 4, 5, 6, 7};

     
        List<Integer> list = new ArrayList<>();
        Collections.addAll(list, originalArray);

        Collections.shuffle(list);



        Integer[] shuffledArray = list.toArray(new Integer[0]);

        System.out.println("Shuffled Array:");
        for (Integer value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
