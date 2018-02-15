## Medication Tracker Built on Hyperledger Fabric

[//]: # (Image References)

[image1]: images/image1.PNG "Query All of Ledger"
[image2]: images/image2.PNG "Single Query"
[image3]: images/image3.PNG "Create Item"
[image4]: images/image4.PNG "Change Holder"
[image5]: images/image5.PNG "Updated Ledger"


This sample application serves as an example of how we might employ blockchain technology to address the significant problem of prescription medication abuse in the U.S.

### The problem

Deaths in the U.S. from prescription drug overdoses rose from 3,785 in 2000 to 17,741 in 2016, according to the Centers for Disease Control and Prevention.

Opioid-based painkillers including Oxycodone and Vicodin may be over prescribed by doctors or sold on the black market. An [investigation](https://www.washingtonpost.com/graphics/2017/investigations/dea-drug-industry-congress/?utm_term=.4c490838c6a4) by the Washington Post details the curtailment of Drug Enforcement Agency powers to freeze suspicious drug shipments. The article refers to unrealistically large orders sent by distributors to pharmacies. In one example, distributor Miami-Luken shipped 258,000 hydrocodone pills to one pharmacy in Williamson, West Virginia. That amount would mean 88 pills for each of Williamson's 2,924 residents.  

Though the epidemic requires attention beyond technology, blockchain could be useful in ensuring transparency and validity of transfer of drugs from manufacturer to pharmacy or doctor's office. The resulting immutable ledger would provide a record of transfer of drugs, ensure legitimacy of the supply chain, and could alert authorities to potentially harmful or illegal distribution patterns. Drugs recovered from the black market could also be traced from source to find weak links.

### How blockchain could help

This is by no means a production-ready app, however serves as a micro demonstration of how we can create and transfer medication between actors on the supply chain. The project is built on [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric), an open-source blockchain framework run by the Linux Foundation. The application is a fork and adaption of the excellent sample app material found [here](https://github.com/hyperledger/fabric-samples).

Blockchain's distributed ledger approach differs from traditional databases as its records are decentralized. There is no single point of failure for the data storage, and the ledger is synchronized across the network, which in this case could comprise manufacturers, distributors, pharmacies, hospitals and authorities. The process of keeping the ledger up to date with all parties in agreement is through Hyperledger Fabric's process of consensus. This involves ordering of transactions or transfers of medication and participating peers on the network to agree on and commit changes to the ledger.

### This Application

In contrast to open blockchain systems including Bitcoin and Ethereum, Hyperledger Fabric is permissioned and private. This means that all members have to enroll through its Membership Service Provider module.  
Fabric also offers the creation of 'channels', which allow a group of participants to create partitioned ledgers for transactions. This may be appealing to commercial entities who may pay or charge different prices to different clients.

### Walkthrough

The application's database is populated with some example drug packets.

![alt text][image1]

The manufacturer, ID number of a particular drug packet, timestamp of when it was added to the ledger, the current holder and location are noted.

![alt text][image2]

A single query for a packet ID reveals its current location and holder.

![alt text][image3]

Here we add a packet to the registry, and Hyperledger generates a unique transaction ID for this event.

![alt text][image4]

We can change the holder (in this case, from pharmacy chain KVS to a doctor's office), and again a transaction ID logs this event.

![alt text][image5]

The ledger now reflects the change for packet 1. This will be broadcast across the network.

Installation Instructions

-- Make sure you have [Node.js](https://nodejs.org/en/), [Go](https://golang.org/doc/install) and [Docker](https://docs.docker.com/install/) (CE edition is fine) installed.

--Install [Hyperledger](https://hyperledger-fabric.readthedocs.io/en/latest/getting_started.html)

-- Clone this repository

-- From the drup-app folder, to remove any pre-existing Docker containers, run:

-- docker rm -f $(docker ps -aq)

-- Start up Hyperledger

-- ./startFabric.sh

Now we install the required Node packages and register the Admin and User components of the network before starting the application.

-- npm install

-- node registerAdmin.js

-- node registerUser.js

-- node server.js

The client should launch on localhost:8000 in any web browser.
