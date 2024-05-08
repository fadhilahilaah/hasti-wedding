simplyCountdown(".simply-countdown", {
    year: 2027, // required
    month: 7, // required
    day: 7, // required
    hours: 8, // Default is 0 [0-23] integer
    words: {
      //words displayed into the countdown
      days: { singular: "Hari", plural: "Hari" },
      hours: { singular: "Jam", plural: "Jam" },
      minutes: { singular: "Menit", plural: "Menit" },
      seconds: { singular: "Detik", plural: "Detik" },
    },
  });