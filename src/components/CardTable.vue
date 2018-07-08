<template>

  <table>
    <thead class="chart-info">
      <tr>
        <td>Symbol</td>
        <td>Price (USD)</td>
        <td>Change </td>
      </tr>
    </thead>
  </table>

</template>

<script>
export default {
  name: 'CardTable'
}
</script>

<style>

table {
  width: 99%;
  margin-left: 5px;
  margin-right: 9px;
}

td {
  font-size: 13px;
  line-height: 40px;
  vertical-align: top;

}

.chart-info {
  font-weight: bold;
}
</style>
