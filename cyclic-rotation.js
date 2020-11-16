function solution(A, K) {
    if (A.length === K || K === 0) {
        return A
    }
    for (let i = 0; i < K; i++) {
        let lastElement = A[A.length - 1]
        A.unshift(lastElement)
        A.pop()
    }
    return A
}

solution([5, -1000], 1)
  //-> [9, 7, 6, 3, 8]  0 1 2 3 4  2 3 5 0 1)
solution([6, 3, 8, 9, 7],1)
//[7, 6, 3, 8, 9])
solution([7, 6, 3, 8, 9],1)
//[9, 7, 6, 3, 8])
solution([], 4)