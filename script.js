$(document).ready(function() {
    // City options and their corresponding countries
    const cityOptions = {
        london: "United Kingdom",
        paris: "France",
        newyork: "United States",
        tokyo: "Japan",
        beijing: "China",
        moscow: "Russia",
        cairo: "Egypt",
        rio: "Brazil",
        sydney: "Australia",
        rome: "Italy",
        berlin: "Germany",
        cape: "South Africa",
        mumbai: "India",
        istanbul: "Turkey",
        toronto: "Canada",
        dubai: "United Arab Emirates",
        sao: "Brazil",
        bangkok: "Thailand",
        hong: "Hong Kong",
        singapore: "Singapore",
        mexico: "Mexico",
        nairobi: "Kenya",
        amsterdam: "Netherlands",
        athens: "Greece",
        barcelona: "Spain",
        chicago: "United States",
        dallas: "United States",
        delhi: "India",
        houston: "United States",
        jakarta: "Indonesia",
        johannesburg: "South Africa",
        kolkata: "India",
        losangeles: "United States",
        madrid: "Spain",
        miami: "United States",
        milan: "Italy",
        montreal: "Canada",
        munich: "Germany",
        oslo: "Norway",
        seoul: "South Korea",
        stockholm: "Sweden"
    };
  
    // Populate country select when a city is selected
    $('#citySelect').change(function() {
      const selectedCity = $(this).val();
      const selectedCountry = cityOptions[selectedCity];
  
      if (selectedCountry) {
        $('#countrySelect').val(selectedCountry);
      } else {
        $('#countrySelect').val('');
      }
    });
  });
  