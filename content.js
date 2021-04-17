

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    if (message = "run"){
        Run();
    }
    
    function Run() {

        if (document.readyState == "interactive" || document.readyState == "complete") {


            console.log("Its running in LFG SNOW")

            let theIframe = document.getElementById("gsft_main")

            let text = theIframe.contentWindow.document.querySelectorAll(".question_textarea_input")[5].value

            let content = text.split("\n");
            let filtered = content.filter(Boolean);


            let contentnew = [];
            for (let i = 0; i < filtered.length; i++){
                if (filtered[i] !== ""){
                    contentnew.push(filtered[i].replace(/\s/g, ''));
                }
            };

            contentnew.push("Not found")

        }


        function findingIndex(string){

            let dig = contentnew.map(v => v.toLowerCase());

            // console.log(dig)
            let b = dig.filter(s => s.includes(string.toLowerCase())).toString()

            // console.log(b)

            let index = dig.indexOf(b)

            if (index == -1){

                return contentnew.indexOf("Not found")

            } else {

                return index
            }

            
        }

        function findingArrayIndex(string){

            let dig = contentnew.map(v => v.toLowerCase());

            let b = dig.filter(s => s.includes(string.toLowerCase()))

            if (b.length == 1){
                let string1 = b[0].toString()
                let index1 = dig.indexOf(string1)
                let dir1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                return [dir1]
            } else if (b.length == 2){
                let string1 = b[0].toString()
                let string2 = b[1].toString()
                let index1 = dig.indexOf(string1)
                let index2 = dig.indexOf(string2)
                let dir1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                let dir2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                return [dir1, dir2]
            } else {
                let string1 = b[0].toString()
                let string2 = b[1].toString()
                let string3 = b[2].toString()
                let index1 = dig.indexOf(string1)
                let index2 = dig.indexOf(string2)
                let index3 = dig.indexOf(string3)
                let dir1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                let dir2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                let dir3 = contentnew[index3].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "").replace(/\\/i, '_').replace(/\\/g, '/')
                return [dir1, dir2, dir3]
            }

        }

        function siteArray(string){
            let dig = contentnew.map(v => v.toLowerCase());

            let b = dig.filter(s => s.includes(string.toLowerCase()))

            if (b.length == 1){
                let string1 = b[0].toString()
                let index1 = dig.indexOf(string1)
                let site1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [site1]
            } else if (b.length == 2){
                let string1 = b[0].toString()
                let string2 = b[1].toString()
                let index1 = dig.indexOf(string1)
                let index2 = dig.indexOf(string2)
                let site1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let site2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [site1, site2]
            } else {
                let string1 = b[0].toString()
                console.log(string1)
                let string2 = b[1].toString()
                let string3 = b[2].toString()
                let index1 = dig.indexOf(string1)
                console.log(index1)
                let index2 = dig.indexOf(string2)
                let index3 = dig.indexOf(string3)
                let site1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let site2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let site3 = contentnew[index3].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [site1, site2, site3]
            }

        }

        function FileName (string){

            let dig = contentnew.map(v => v.toLowerCase());

            let b = dig.filter(s => s.includes(string.toLowerCase()))

            if (b.length == 1){
                let string1 = b[0].toString()
                let index1 = dig.indexOf(string1)
                let name1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [name1]
            } else if (b.length == 2){
                let string1 = b[0].toString()
                let string2 = b[1].toString()
                let index1 = dig.indexOf(string1)
                let index2 = dig.indexOf(string2)
                let name1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let name2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [name1, name2]
            } else {
                let string1 = b[0].toString()
                let string2 = b[1].toString()
                let string3 = b[2].toString()
                let index1 = dig.indexOf(string1)
                let index2 = dig.indexOf(string2)
                let index3 = dig.indexOf(string3)
                let name1 = contentnew[index1].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let name2 = contentnew[index2].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                let name3 = contentnew[index3].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", "")
                return [name1, name2, name3]
            }

        }

        const RITM = {

            RequestType: contentnew[findingIndex("RequestType")].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", ""),
            MB: contentnew[findingIndex("MB/ID=")].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", ""),
            SubMB: contentnew[findingIndex("SubMB=")].toString().replace(/^.*\=(.*)$/ig, "$1").replace(",", ""),
            ReceivingPGP: contentnew[findingIndex("ReceivingPGP")].toString().replace(/^.*\?(.*)$/ig, "$1", '').replace(",", ""),
            SendingPGP: contentnew[findingIndex("SendingPGP")].toString().replace(/^.*\?(.*)$/ig, "$1", '').replace(",", ""),
            Protocol: contentnew[findingIndex("Protocol")].toString().replace(/^.*\=(.*)$/ig, "$1", '').replace(",", ""),
            Site: siteArray("Site"),
            FileName: FileName("Rename"),
            DetailedEmail: contentnew[findingIndex("Detail")].toString().replace(/^.*\=(.*)$/ig, "$1", '').replace(",", ""),
            InternalContact: contentnew[findingIndex("Internal")].toString().replace(/^.*\=(.*)$/ig, "$1", '').replace(",", ""),
            Directory: findingArrayIndex("dir")
        }


        if (RITM.Site.length == 3) {
            if (RITM.Site[0] == "SFTP2Windows") {
                val1 = "891380141b85c553fnode1"

            } else if (RITM.Site[0] == "nc2plwas107.lnc.com" || RITM.Site[0] == "nc2plwas107") {

                val1 = "78962714ae41e8bb8node1"
            } else {
                val1 = "Check SSH ID"
            }

            if (RITM.Site[1] == "SFTP2Windows") {
                val2 = "891380141b85c553fnode1"

            } else if (RITM.Site[1] == "nc2plwas107.lnc.com" || RITM.Site[1] == "nc2plwas107") {

                val2 = "78962714ae41e8bb8node1"
            } else {
                val2 = "Check SSH ID"
            }

            if (RITM.Site[2] == "SFTP2Windows") {
                val3 = "891380141b85c553fnode1"

            } else if (RITM.Site[2] == "nc2plwas107.lnc.com" || RITM.Site[2] == "nc2plwas107") {

                val3 = "78962714ae41e8bb8node1"
            } else {
                val3 = "Check SSH ID"
            }

        } else if (RITM.Site.length == 2) {

            if (RITM.Site[0] == "SFTP2Windows") {
                val1 = "891380141b85c553fnode1"

            } else if (RITM.Site[0] == "nc2plwas107.lnc.com" || RITM.Site[0] == "nc2plwas107") {

                val1 = "78962714ae41e8bb8node1"
            } else {
                val1 = "Check SSH ID"
            }

            if (RITM.Site[1] == "SFTP2Windows") {
                val2 = "891380141b85c553fnode1"

            } else if (RITM.Site[1] == "nc2plwas107.lnc.com" || RITM.Site[1] == "nc2plwas107") {

                val2 = "78962714ae41e8bb8node1"
            } else {
                val2 = "Check SSH ID"
            }

            val3 = "undefined"
        } else if (RITM.Site.length == 1) {

            if (RITM.Site[0] == "SFTP2Windows") {
                val1 = "891380141b85c553fnode1"

            } else if (RITM.Site[0] == "nc2plwas107.lnc.com" || RITM.Site[0] == "nc2plwas107") {

                val1 = "78962714ae41e8bb8node1"
            } else {
                val1 = "Check SSH ID"
            }

            val2 = "undefined"
            val3 = "undefined"

        }

        if (RITM.FileName.length == 3) {
            Fname1 = RITM.FileName[0]
            Fname2 = RITM.FileName[1]
            Fname3 = RITM.FileName[2]

        } else if (RITM.FileName.length == 2){
            Fname1 = RITM.FileName[0]
            Fname2 = RITM.FileName[1]
            Fname3 = "undefined"
        } else if (RITM.FileName.length == 1) {

            Fname1 = RITM.FileName[0]
            Fname2 = "undefined"
            Fname3 = "undefined"

        }



        let tbl = document.createElement('table');

        function CreateTable(){
            
            
            tbl.setAttribute("id", "table101")
            tbl.style.width = '100%';

            if (RITM.RequestType.includes("NewMB" || "newmb" || "Newmb" || "newMb") || contentnew.filter(s => s.includes("IPAddress" || "ipaddress" || "IPaddress"))){
                tr = document.createElement('tr');

                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');
                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');
                let td10 = document.createElement('td');
                let td11 = document.createElement('td');
                let td12 = document.createElement('td');
                let td13 = document.createElement('td');
                let td14 = document.createElement('td');
                let td15 = document.createElement('td');
                let td16 = document.createElement('td');
                let td17 = document.createElement('td');
                let td18 = document.createElement('td');
                let td19 = document.createElement('td');
                let td20 = document.createElement('td');
                let td21 = document.createElement('td');
                let td22 = document.createElement('td');
                let td23 = document.createElement('td');

                td1.appendChild(document.createTextNode(""));
                td2.appendChild(document.createTextNode(""));
                td3.appendChild(document.createTextNode(""));
                td4.appendChild(document.createTextNode(RITM.MB));
                if (RITM.ReceivingPGP == "n" || RITM.ReceivingPGP == "N"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_1"));
                } else if (RITM.ReceivingPGP == "y" || RITM.ReceivingPGP == "Y"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Route_PGP_Decrypt_Any_1"));
                } else {
                    td5.appendChild(document.createTextNode("Validate"));
                }
                
                td6.appendChild(document.createTextNode("Producer"));
                td7.appendChild(document.createTextNode(RITM.MB));
                td8.appendChild(document.createTextNode("Prod_EDM"));
                td9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                td10.appendChild(document.createTextNode(""));
                td11.appendChild(document.createTextNode(""));
                td12.appendChild(document.createTextNode(""));
                td13.appendChild(document.createTextNode("no"));
                td14.appendChild(document.createTextNode("no"));
                td15.appendChild(document.createTextNode("no"));
                td16.appendChild(document.createTextNode(""));
                td17.appendChild(document.createTextNode("no"));
                td18.appendChild(document.createTextNode(""));
                td19.appendChild(document.createTextNode(""));
                td20.appendChild(document.createTextNode(""));
                td21.appendChild(document.createTextNode(""));
                td22.appendChild(document.createTextNode(""));
                td23.appendChild(document.createTextNode(""));

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);
                tr.appendChild(td10);
                tr.appendChild(td11);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tr.appendChild(td15);
                tr.appendChild(td16);
                tr.appendChild(td17);
                tr.appendChild(td18);
                tr.appendChild(td19);
                tr.appendChild(td20);
                tr.appendChild(td21);
                tr.appendChild(td22);
                tr.appendChild(td23);


                tbl.appendChild(tr);

            }

            if(RITM.Directory.length == 2) {
                
                tr = document.createElement('tr');
                tr1 = document.createElement('tr');

                if (val2 == "undefined") {
                    val2 = val1
                }

                if (Fname2 == "undefined") {
                    Fname2 = Fname1
                }


                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');
                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');
                let td10 = document.createElement('td');
                let td11 = document.createElement('td');
                let td12 = document.createElement('td');
                let td13 = document.createElement('td');
                let td14 = document.createElement('td');
                let td15 = document.createElement('td');
                let td16 = document.createElement('td');
                let td17 = document.createElement('td');
                let td18 = document.createElement('td');
                let td19 = document.createElement('td');
                let td20 = document.createElement('td');
                let td21 = document.createElement('td');
                let td22 = document.createElement('td');
                let td23 = document.createElement('td');

                td1.appendChild(document.createTextNode(""));
                td2.appendChild(document.createTextNode(""));
                td3.appendChild(document.createTextNode(""));
                td4.appendChild(document.createTextNode(RITM.SubMB));
                if (RITM.ReceivingPGP == "n" || RITM.ReceivingPGP == "N"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_1"));
                } else if (RITM.ReceivingPGP == "y" || RITM.ReceivingPGP == "Y"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Route_PGP_Decrypt_Any_1"));
                } else {
                    td5.appendChild(document.createTextNode("Validate"));
                }
                
                td6.appendChild(document.createTextNode("Consumer"));
                td7.appendChild(document.createTextNode(RITM.MB));
                td8.appendChild(document.createTextNode("Prod_EDM"));
                td9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                td10.appendChild(document.createTextNode(""));
                td11.appendChild(document.createTextNode(""));
                td12.appendChild(document.createTextNode(""));
                td13.appendChild(document.createTextNode("no"));
                td14.appendChild(document.createTextNode("no"));
                td15.appendChild(document.createTextNode("no"));
                td16.appendChild(document.createTextNode(""));
                td17.appendChild(document.createTextNode("no"));
                td18.appendChild(document.createTextNode(val1));
                td19.appendChild(document.createTextNode(RITM.Directory[0]));
                td20.appendChild(document.createTextNode(Fname1));
                td21.appendChild(document.createTextNode(RITM.DetailedEmail));
                td22.appendChild(document.createTextNode(""));
                td23.appendChild(document.createTextNode(RITM.InternalContact));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);
                tr.appendChild(td10);
                tr.appendChild(td11);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tr.appendChild(td15);
                tr.appendChild(td16);
                tr.appendChild(td17);
                tr.appendChild(td18);
                tr.appendChild(td19);
                tr.appendChild(td20);
                tr.appendChild(td21);
                tr.appendChild(td22);
                tr.appendChild(td23);

                let d1 = document.createElement('td');
                let d2 = document.createElement('td');
                let d3 = document.createElement('td');
                let d4 = document.createElement('td');
                let d5 = document.createElement('td');
                let d6 = document.createElement('td');
                let d7 = document.createElement('td');
                let d8 = document.createElement('td');
                let d9 = document.createElement('td');
                let d10 = document.createElement('td');
                let d11 = document.createElement('td');
                let d12 = document.createElement('td');
                let d13 = document.createElement('td');
                let d14 = document.createElement('td');
                let d15 = document.createElement('td');
                let d16 = document.createElement('td');
                let d17 = document.createElement('td');
                let d18 = document.createElement('td');
                let d19 = document.createElement('td');
                let d20 = document.createElement('td');
                let d21 = document.createElement('td');
                let d22 = document.createElement('td');
                let d23 = document.createElement('td');

                d1.appendChild(document.createTextNode(""));
                d2.appendChild(document.createTextNode(""));
                d3.appendChild(document.createTextNode(""));
                d4.appendChild(document.createTextNode(RITM.SubMB + "_1"));
                d5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_Secondary_MBX_1"));
                d6.appendChild(document.createTextNode("Consumer"));
                d7.appendChild(document.createTextNode(RITM.SubMB));
                d8.appendChild(document.createTextNode("Prod_EDM"));
                d9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                d10.appendChild(document.createTextNode(""));
                d11.appendChild(document.createTextNode(""));
                d12.appendChild(document.createTextNode(""));
                d13.appendChild(document.createTextNode("no"));
                d14.appendChild(document.createTextNode("no"));
                d15.appendChild(document.createTextNode("no"));
                d16.appendChild(document.createTextNode(""));
                d17.appendChild(document.createTextNode("no"));
                d18.appendChild(document.createTextNode(val2));
                d19.appendChild(document.createTextNode(RITM.Directory[1]));
                if (Fname2 == "-CMB-.-OF1-_-DT2-.-OF2--XPG-"){
                    d20.appendChild(document.createTextNode("-PMB-.-OF1-_-DT2-.-OF2--XPG-"));
                } else {
                    d20.appendChild(document.createTextNode(Fname2)); 
                }
                d21.appendChild(document.createTextNode(RITM.DetailedEmail));
                d22.appendChild(document.createTextNode(""));
                d23.appendChild(document.createTextNode(RITM.InternalContact));

                tr1.appendChild(d1);
                tr1.appendChild(d2);
                tr1.appendChild(d3);
                tr1.appendChild(d4);
                tr1.appendChild(d5);
                tr1.appendChild(d6);
                tr1.appendChild(d7);
                tr1.appendChild(d8);
                tr1.appendChild(d9);
                tr1.appendChild(d10);
                tr1.appendChild(d11);
                tr1.appendChild(d12);
                tr1.appendChild(d13);
                tr1.appendChild(d14);
                tr1.appendChild(d15);
                tr1.appendChild(d16);
                tr1.appendChild(d17);
                tr1.appendChild(d18);
                tr1.appendChild(d19);
                tr1.appendChild(d20);
                tr1.appendChild(d21);
                tr1.appendChild(d22);
                tr1.appendChild(d23);
                tbl.appendChild(tr);
                tbl.appendChild(tr1);

                chrome.runtime.sendMessage(tbl.innerHTML);

            } else if(RITM.Directory.length == 3) {

                tr = document.createElement('tr');
                tr1 = document.createElement('tr');
                tr2 = document.createElement('tr');

                if (val2 == "undefined") {
                    val2 = val1
                }

                if (val3 == "undefined") {
                    val3 = val1
                }

                if (Fname2 == "undefined") {
                    Fname2 = Fname1
                }

                if (Fname3 == "undefined") {
                    Fname3 = Fname2
                }


                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');
                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');
                let td10 = document.createElement('td');
                let td11 = document.createElement('td');
                let td12 = document.createElement('td');
                let td13 = document.createElement('td');
                let td14 = document.createElement('td');
                let td15 = document.createElement('td');
                let td16 = document.createElement('td');
                let td17 = document.createElement('td');
                let td18 = document.createElement('td');
                let td19 = document.createElement('td');
                let td20 = document.createElement('td');
                let td21 = document.createElement('td');
                let td22 = document.createElement('td');
                let td23 = document.createElement('td');

                td1.appendChild(document.createTextNode(""));
                td2.appendChild(document.createTextNode(""));
                td3.appendChild(document.createTextNode(""));
                td4.appendChild(document.createTextNode(RITM.SubMB));
                if (RITM.ReceivingPGP == "n" || RITM.ReceivingPGP == "N"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_1"));
                } else if (RITM.ReceivingPGP == "y" || RITM.ReceivingPGP == "Y"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Route_PGP_Decrypt_Any_1"));
                } else {
                    td5.appendChild(document.createTextNode("Validate"));
                }
                
                td6.appendChild(document.createTextNode("Consumer"));
                td7.appendChild(document.createTextNode(RITM.MB));
                td8.appendChild(document.createTextNode("Prod_EDM"));
                td9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                td10.appendChild(document.createTextNode(""));
                td11.appendChild(document.createTextNode(""));
                td12.appendChild(document.createTextNode(""));
                td13.appendChild(document.createTextNode("no"));
                td14.appendChild(document.createTextNode("no"));
                td15.appendChild(document.createTextNode("no"));
                td16.appendChild(document.createTextNode(""));
                td17.appendChild(document.createTextNode("no"));
                td18.appendChild(document.createTextNode(val1));
                td19.appendChild(document.createTextNode(RITM.Directory[0]));
                td20.appendChild(document.createTextNode(Fname1));
                td21.appendChild(document.createTextNode(RITM.DetailedEmail));
                td22.appendChild(document.createTextNode(""));
                td23.appendChild(document.createTextNode(RITM.InternalContact));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);
                tr.appendChild(td10);
                tr.appendChild(td11);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tr.appendChild(td15);
                tr.appendChild(td16);
                tr.appendChild(td17);
                tr.appendChild(td18);
                tr.appendChild(td19);
                tr.appendChild(td20);
                tr.appendChild(td21);
                tr.appendChild(td22);
                tr.appendChild(td23);

                let d1 = document.createElement('td');
                let d2 = document.createElement('td');
                let d3 = document.createElement('td');
                let d4 = document.createElement('td');
                let d5 = document.createElement('td');
                let d6 = document.createElement('td');
                let d7 = document.createElement('td');
                let d8 = document.createElement('td');
                let d9 = document.createElement('td');
                let d10 = document.createElement('td');
                let d11 = document.createElement('td');
                let d12 = document.createElement('td');
                let d13 = document.createElement('td');
                let d14 = document.createElement('td');
                let d15 = document.createElement('td');
                let d16 = document.createElement('td');
                let d17 = document.createElement('td');
                let d18 = document.createElement('td');
                let d19 = document.createElement('td');
                let d20 = document.createElement('td');
                let d21 = document.createElement('td');
                let d22 = document.createElement('td');
                let d23 = document.createElement('td');

                d1.appendChild(document.createTextNode(""));
                d2.appendChild(document.createTextNode(""));
                d3.appendChild(document.createTextNode(""));
                d4.appendChild(document.createTextNode(RITM.SubMB + "_1"));
                d5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_Secondary_MBX_2"));
                d6.appendChild(document.createTextNode("Consumer"));
                d7.appendChild(document.createTextNode(RITM.SubMB));
                d8.appendChild(document.createTextNode("Prod_EDM"));
                d9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                d10.appendChild(document.createTextNode(""));
                d11.appendChild(document.createTextNode(""));
                d12.appendChild(document.createTextNode(""));
                d13.appendChild(document.createTextNode("no"));
                d14.appendChild(document.createTextNode("no"));
                d15.appendChild(document.createTextNode("no"));
                d16.appendChild(document.createTextNode(""));
                d17.appendChild(document.createTextNode("no"));
                d18.appendChild(document.createTextNode(val2));
                d19.appendChild(document.createTextNode(RITM.Directory[1]));
                if (Fname2 == "-CMB-.-OF1-_-DT2-.-OF2--XPG-"){
                    d20.appendChild(document.createTextNode("-PMB-.-OF1-_-DT2-.-OF2--XPG-"));
                } else {
                    d20.appendChild(document.createTextNode(Fname2)); 
                }
                d21.appendChild(document.createTextNode(RITM.DetailedEmail));
                d22.appendChild(document.createTextNode(""));
                d23.appendChild(document.createTextNode(RITM.InternalContact));

                tr1.appendChild(d1);
                tr1.appendChild(d2);
                tr1.appendChild(d3);
                tr1.appendChild(d4);
                tr1.appendChild(d5);
                tr1.appendChild(d6);
                tr1.appendChild(d7);
                tr1.appendChild(d8);
                tr1.appendChild(d9);
                tr1.appendChild(d10);
                tr1.appendChild(d11);
                tr1.appendChild(d12);
                tr1.appendChild(d13);
                tr1.appendChild(d14);
                tr1.appendChild(d15);
                tr1.appendChild(d16);
                tr1.appendChild(d17);
                tr1.appendChild(d18);
                tr1.appendChild(d19);
                tr1.appendChild(d20);
                tr1.appendChild(d21);
                tr1.appendChild(d22);
                tr1.appendChild(d23);

                let fd1 = document.createElement('td');
                let fd2 = document.createElement('td');
                let fd3 = document.createElement('td');
                let fd4 = document.createElement('td');
                let fd5 = document.createElement('td');
                let fd6 = document.createElement('td');
                let fd7 = document.createElement('td');
                let fd8 = document.createElement('td');
                let fd9 = document.createElement('td');
                let fd10 = document.createElement('td');
                let fd11 = document.createElement('td');
                let fd12 = document.createElement('td');
                let fd13 = document.createElement('td');
                let fd14 = document.createElement('td');
                let fd15 = document.createElement('td');
                let fd16 = document.createElement('td');
                let fd17 = document.createElement('td');
                let fd18 = document.createElement('td');
                let fd19 = document.createElement('td');
                let fd20 = document.createElement('td');
                let fd21 = document.createElement('td');
                let fd22 = document.createElement('td');
                let fd23 = document.createElement('td');

                fd1.appendChild(document.createTextNode(""));
                fd2.appendChild(document.createTextNode(""));
                fd3.appendChild(document.createTextNode(""));
                fd4.appendChild(document.createTextNode(RITM.SubMB + "_2"));
                fd5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_Secondary_MBX_1"));
                fd6.appendChild(document.createTextNode("Consumer"));
                fd7.appendChild(document.createTextNode(RITM.SubMB + "_1"));
                fd8.appendChild(document.createTextNode("Prod_EDM"));
                fd9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                fd10.appendChild(document.createTextNode(""));
                fd11.appendChild(document.createTextNode(""));
                fd12.appendChild(document.createTextNode(""));
                fd13.appendChild(document.createTextNode("no"));
                fd14.appendChild(document.createTextNode("no"));
                fd15.appendChild(document.createTextNode("no"));
                fd16.appendChild(document.createTextNode(""));
                fd17.appendChild(document.createTextNode("no"));
                fd18.appendChild(document.createTextNode(val3));
                fd19.appendChild(document.createTextNode(RITM.Directory[2]));
                if (Fname3 == "-CMB-.-OF1-_-DT2-.-OF2--XPG-"){
                    fd20.appendChild(document.createTextNode("-PMB-.-OF1-_-DT2-.-OF2--XPG-"));
                } else {
                    fd20.appendChild(document.createTextNode(Fname3)); 
                }
                fd21.appendChild(document.createTextNode(RITM.DetailedEmail));
                fd22.appendChild(document.createTextNode(""));
                fd23.appendChild(document.createTextNode(RITM.InternalContact));

                tr2.appendChild(fd1);
                tr2.appendChild(fd2);
                tr2.appendChild(fd3);
                tr2.appendChild(fd4);
                tr2.appendChild(fd5);
                tr2.appendChild(fd6);
                tr2.appendChild(fd7);
                tr2.appendChild(fd8);
                tr2.appendChild(fd9);
                tr2.appendChild(fd10);
                tr2.appendChild(fd11);
                tr2.appendChild(fd12);
                tr2.appendChild(fd13);
                tr2.appendChild(fd14);
                tr2.appendChild(fd15);
                tr2.appendChild(fd16);
                tr2.appendChild(fd17);
                tr2.appendChild(fd18);
                tr2.appendChild(fd19);
                tr2.appendChild(fd20);
                tr2.appendChild(fd21);
                tr2.appendChild(fd22);
                tr2.appendChild(fd23);


                tbl.appendChild(tr);
                tbl.appendChild(tr1);
                tbl.appendChild(tr2);

                chrome.runtime.sendMessage(tbl.innerHTML);



            } else if(RITM.Directory.length == 1) {

                tr = document.createElement('tr');

                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');
                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');
                let td10 = document.createElement('td');
                let td11 = document.createElement('td');
                let td12 = document.createElement('td');
                let td13 = document.createElement('td');
                let td14 = document.createElement('td');
                let td15 = document.createElement('td');
                let td16 = document.createElement('td');
                let td17 = document.createElement('td');
                let td18 = document.createElement('td');
                let td19 = document.createElement('td');
                let td20 = document.createElement('td');
                let td21 = document.createElement('td');
                let td22 = document.createElement('td');
                let td23 = document.createElement('td');

                td1.appendChild(document.createTextNode(""));
                td2.appendChild(document.createTextNode(""));
                td3.appendChild(document.createTextNode(""));
                td4.appendChild(document.createTextNode(RITM.SubMB));
                if (RITM.ReceivingPGP == "n" || RITM.ReceivingPGP == "N"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Routing_1"));
                } else if (RITM.ReceivingPGP == "y" || RITM.ReceivingPGP == "Y"){
                    td5.appendChild(document.createTextNode("LFG_Generic_Static_Route_PGP_Decrypt_Any_1"));
                } else {
                    td5.appendChild(document.createTextNode("Validate"));
                }
                
                td6.appendChild(document.createTextNode("Consumer"));
                td7.appendChild(document.createTextNode(RITM.MB));
                td8.appendChild(document.createTextNode("Prod_EDM"));
                td9.appendChild(document.createTextNode("EDI.Team@lfg.com"));
                td10.appendChild(document.createTextNode(""));
                td11.appendChild(document.createTextNode(""));
                td12.appendChild(document.createTextNode(""));
                td13.appendChild(document.createTextNode("no"));
                td14.appendChild(document.createTextNode("no"));
                td15.appendChild(document.createTextNode("no"));
                td16.appendChild(document.createTextNode(""));
                td17.appendChild(document.createTextNode("no"));
                td18.appendChild(document.createTextNode(val1));
                td19.appendChild(document.createTextNode(RITM.Directory[0]));
                td20.appendChild(document.createTextNode(Fname1));
                td21.appendChild(document.createTextNode(RITM.DetailedEmail));
                td22.appendChild(document.createTextNode(""));
                td23.appendChild(document.createTextNode(RITM.InternalContact));

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);
                tr.appendChild(td10);
                tr.appendChild(td11);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tr.appendChild(td15);
                tr.appendChild(td16);
                tr.appendChild(td17);
                tr.appendChild(td18);
                tr.appendChild(td19);
                tr.appendChild(td20);
                tr.appendChild(td21);
                tr.appendChild(td22);
                tr.appendChild(td23);


                tbl.appendChild(tr);

                chrome.runtime.sendMessage(tbl.innerHTML);
            }

        }
        
        CreateTable();

    }
});
