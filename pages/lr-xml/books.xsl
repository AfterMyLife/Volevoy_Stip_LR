<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Библиотека</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Identify_number</th>
      <th style="text-align:left">Rack</th>
<th style="text-align:left">Author</th>
<th style="text-align:left">Title</th>
<th style="text-align:left">Edited_by</th>
<th style="text-align:left">Book_count</th>
<th style="text-align:left">Count_issued</th>
    </tr>
    <xsl:for-each select="library/Book">
<!-- [Identify_number='145']-->
 <!-- <xsl:sort select="Book_count"/> -->
    <tr>
      <td><xsl:value-of select="Identify_number"/></td>
      <td><xsl:value-of select="Rack"/></td>
<td><xsl:value-of select="Author"/></td>
<td><xsl:value-of select="Title"/></td>
<td><xsl:value-of select="Edited_by"/></td>
<td><xsl:value-of select="Book_count"/></td>
<td><xsl:value-of select="Count_issued"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
