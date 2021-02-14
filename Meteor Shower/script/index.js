const meteor_showers = [
    { name: "Alfa Centaurídeos", peak: "Feb 8", speed: "56 km/s"},
    { name: "Gama Normídeos", peak: "Mar 14", speed: "56 km/s"},
    { name: "Pi Pupídeos", peak: "Apr 23", speed: "18 km/s"},
    { name: "Eta Aquáridas", peak: "May 5", speed: "66 km/s"},
    { name: "Alfa Capricornídeos", peak: "Jul 30", speed: "23 km/s"},
    { name: "Delta Aquáridas do Sul", peak: "Jul 28", speed: "41 km/s"},
    { name: "Piscis Austrinídeos", peak: "Jul 28", speed: "35 km/s"},
    { name: "Fenícidas", peak: "Dec 6", speed: "18 km/s"},
    { name: "Pupidas-Velidas", peak: "Dec 12", speed: "40 km/s"}
];


function meteor_shower_list () {
    let title = "=== meteor showers - southern hemisphere ==="
    console.log(title.toLocaleUpperCase())
    console.log("\n")

    for (let meteor of meteor_showers) {

        let name_meteor = meteor.name
        let peak_meteor = meteor.peak
        let speed_meteor = meteor.speed

        let peak_month_day = peak_meteor.split(" ")

        let peak_day = peak_month_day[1]
        let peak_month = peak_month_day[0]

        let peak_month_name = ""
        
        switch (peak_month) {
            case "Jan":     
                peak_month_nameme = "January"   
                break
            case "Feb":     
                peak_month_name = "February"     
                break
            case "Mar":     
                peak_month_name = "March"    
                break
            case "Apr":     
                peak_month_name = "April"     
                break
            case "May":     
                peak_month_name = "May"     
                break
            case "Jun":     
                peak_month_name = "June"     
                break
            case "Jul":     
                peak_month_name = "July"     
                break
            case "Aug":     
                peak_month_name = "August"     
                break
            case "Sep":     
                peak_month_name = "September"     
                break
            case "Oct":     
                peak_month_name = "October"     
                break
            case "Nov":     
                peak_month_name = "November"     
                break
            case "Dec":     
                peak_month_name = "December"     
                break
    
            default:        
                peak_month_name = "Invalid month"    
                break
        }


        let peak_date_formated = `${peak_month_name} ${peak_day} `
        let speed_formated = speed_meteor.replace("km/s","kilometers per second")

        console.log("Name: ".padEnd(30, ".") + name_meteor)
        console.log("Peak: ".padEnd(30, ".") + peak_date_formated)
        console.log("Speed: ".padEnd(30, ".") + speed_formated)
        console.log("\n");

    }
}


meteor_shower_list()
