// const test = 'Initial commit '


function solve(n, m, matrix) {
    let sum1 = 0;
    let sum2 = 0;

    let midRow = Math.floor(n / 2);
    let midCol = Math.floor(m / 2);
    // sum1 (Red swastika)
    // Top row (midCol to m-1)
    for (let j = midCol; j < m; j++) sum1 += matrix[0][j];

    // Right column (1 to n-1)
    for (let i = 1; i < n; i++) sum1 += matrix[i][m - 1];

    // Bottom row (m-2 to 0)
    for (let j = m - 2; j >= 0; j--) sum1 += matrix[n - 1][j];

    // Middle column (n-2 to midRow)
    for (let i = n - 2; i >= midRow; i--) sum1 += matrix[i][midCol];

    // sum2 (Blue swastika)
    // Left column (0 to n)
    for (let i = 0; i < n; i++) sum2 += matrix[i][0];

    // Bottom row (1 to midCol)
    for (let j = 1; j <= midCol; j++) sum2 += matrix[n - 1][j];

    // Middle row (midCol+1 to m-1)
    for (let j = midCol + 1; j < m; j++) sum2 += matrix[midRow][j];

    // Top row (midCol-1 to 0)
    for (let j = midCol - 1; j >= 0; j--) sum2 += matrix[0][j];

    console.log(Math.abs(sum1 - sum2));
}








function solve(n,m,matrix){
    
    let sum1 =0
    let sum2 =0
    for(let i=0; i<=n/2;i++){
      sum1 += matrix[i][0]
    }  
    
    for(let j=0 ; j<m; j++){
      sum1 += matrix[1][j]
    }
    
    for(let i=n/2; i<n; i++){
      sum1 += matrix[i][4]
    }
    
    for(let j=0; j<m/2; j++){
      sum2 += matrix[2][j]
    }
    
    console.log(sum2)
      
  }








