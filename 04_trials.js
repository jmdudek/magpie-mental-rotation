// In this file you can specify the trial data for your experiment

const images = ["1_50_different.jpg", "1_50_same.jpg", "1_150_different.jpg", "1_150_same.jpg", "2_50_different.jpg", "2_50_same.jpg", "2_150_different.jpg", "2_150_same.jpg",
"3_50_different.jpg", "3_50_same.jpg", "3_150_different.jpg", "3_150_same.jpg", "4_50_different.jpg", "4_50_same.jpg", "4_150_different.jpg", "4_150_same.jpg",
"5_50_different.jpg", "5_50_same.jpg", "5_150_different.jpg", "5_150_same.jpg", "6_50_different.jpg", "6_50_same.jpg", "6_150_different.jpg", "6_150_same.jpg",
"7_50_different.jpg", "7_50_same.jpg", "7_150_different.jpg", "7_150_same.jpg", "8_50_different.jpg", "8_50_same.jpg", "8_150_different.jpg", "8_150_same.jpg",
"9_50_different.jpg", "9_50_same.jpg", "9_150_different.jpg", "9_150_same.jpg", "10_50_different.jpg", "10_50_same.jpg", "10_150_different.jpg", "10_150_same.jpg",
"11_50_different.jpg", "11_50_same.jpg", "11_150_different.jpg", "11_150_same.jpg", "12_50_different.jpg", "12_50_same.jpg", "12_150_different.jpg", "12_150_same.jpg",
"13_50_different.jpg", "13_50_same.jpg", "13_150_different.jpg", "13_150_same.jpg", "14_50_different.jpg", "14_50_same.jpg", "14_150_different.jpg", "14_150_same.jpg",
"15_50_different.jpg", "15_50_same.jpg", "15_150_different.jpg", "15_150_same.jpg"];

const shuffled_images = shuffle(images);

const create_trials = function(index_beginning, index_end) {
  const trials = [];
  for(i=index_beginning; i<index_end; i++) {
    var trial = {
      question: "Are these two figures the same except for their orientation?",
      picture: 'images/mental_rotation_images/' + shuffled_images[i],
      key1: 'f',
      key2: 'j',
      f: 'same',
      j: 'different',
      expected: get_type_of_image(shuffled_images[i]),
      degree: get_rotation_degree_of_image(shuffled_images[i]),
      number_of_image: get_number_of_image(shuffled_images[i]),
    };
    trials.push(trial);
  }
  return trials;
};

const trial_info = {
  training_images: create_trials(0,12),
  main_images: create_trials(12,60),
};

/*
const trial_info = {
    key_press_trials: [
        {
            question: "Are these two figures the same except for their orientation?",
            picture: 'images/mental_rotation_images/' + shuffled_images[59],
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: get_type_of_image(shuffled_images[59]),
            degree: get_rotation_degree_of_image(shuffled_images[59]),
            number_of_picture: get_number_of_image(shuffled_images[59]),
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: 'images/mental_rotation_images/1_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            degree: '50',
            number_of_picture: '1_50_different'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: 'images/mental_rotation_images/8_150_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            degree: '150',
            number_of_picture: '8_150_different'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: 'images/mental_rotation_images/10_50_different.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'different',
            degree: '50',
            number_of_picture: '10_50_different'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: 'images/mental_rotation_images/12_150_same.jpg',
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            expected: 'same',
            degree: '150',
            number_of_picture: '12_150_same'
        }
    ]
};
*/
