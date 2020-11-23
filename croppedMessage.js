function solution(message,K) {
    let cropped = message.slice(0, K);
    if (message.length <= K) {
       return cropped = message.slice(0, cropped.length);
    } else {
       cropped = message.slice(0, K+1);
       let endSpace = cropped.lastIndexOf(" ");
       return cropped = cropped.slice(0, endSpace);
    }
}

solution('The quick brown fox jumps over the lazy dog', 39);
solution('Codility We test coders', 14)