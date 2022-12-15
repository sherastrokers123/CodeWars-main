function getGrade(s1, s2, s3) {
    let sum = Math.round((s1 + s2 + s3) / 3)
    console.log(sum);
    if (sum <= 100 && sum > 90) {
        return "A";
    }
    if (sum >= 80 && sum < 90) {
        return "B";
    }
    if (sum >= 70 && sum < 80) {
        return "C";
    }
    if (sum >= 60 && sum < 70) {
        return "D";
    }
    if (sum < 60 && sum >= 0) {
        return "F";
    } else {
        return 'Error';
    }
}
console.log(getGrade(0, 0, -3));