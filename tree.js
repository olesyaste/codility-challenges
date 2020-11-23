//return largest number of cells 
function solution() {
    const tables = document.querySelectorAll('table');
    const lengths = Array.from(tables)
    .map(table => table.quesrySelectorAll('td').length)
    return Math.max(...lengths)  
}

{/* <body>

<h1>Some test tables</h1>
<div>
    <table>
        <tr>
            <td>First</td>
            <td>row</td>
        </tr>
        <tr>
            <td>and</td>
            <td>second</td>
            <td>row</td>
        </tr>
        <tr>
            <td>and</td>
            <td>the</td>
            <td>third</td>
            <td>one</td>
        </tr>
    </table>
</div>
<p>Let us see a more regular table below:</p>
<table>
    <tr>
        <td>A</td>
        <td>B</td>
    </tr>
    <tr>
        <td>C</td>
        <td>D</td>
    </tr>
</table>
</body> */}