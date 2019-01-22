function rs1967309interpret(info)
{

    var tB = (info['twoBases']);

    var recommendation = {"AA":"Prescribe as needed. AA is accociated with a 39% decrease in cardiovascular events.","GA":"Do NOT Prescribe. GA is asscoiated with negligible therapeutic effects.","GG":"Danger! Do NOT Prescribe. GG is associated with a 27% increase in cardiovascular events."}

    if (recommendation[tB] == null) {

      return "not found"

    }  else {

    return recommendation[tB]
  }
}
