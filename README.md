# Space Booking

- Final project for the IronHack WebDev Bootcamp, Madrid 2021
- A space flights booking platform by Alexander Marino, Salvador Gallego y Silviu Dilimot under the supervision of Paula de Andres, Teodoro Lopez y German Alvarez

## Endpoints:

### auth.routes.js

-   /signup POST
-   /login POST
-   /logout GET
-   /isLoggedIn POST

### admin.routes.js

-   /users GET

### user.routes.js

Authorization!!!

-   /:id/edit GET
-   :id/edit PUT
-   :id/delete DELETE
    OWNER
-   /user/:id/review_id/edit PUT
-   /user/:id/review_id/delete DELETE ---> te toca alex

### company.routes.js

-   /company
-   /company/edit GET ----> 
-   /company/edit PUT
-   /company/delete DELETE

### destinations.routes.js

-   /destination GET
-   /destination/new POST
-   /destination/:destination_id/details GET
-   /destination/:destination_id/edit GET
-   /destination/:destination_id/edit PUT
-   /destination/:destination_id/delete DELETE

### airport.routes.js
-   /airport/new
-   /airport GET
-   /airport/:airport:/_id/edit GET
-   /airport/:airport:/_id/edit PUT
-   /airport/:airport:/_id/delete DELETE

### flight.routes.js
/flight/ GET
/flight/new POST
/flight/:flight_id/edit GET
/flight/:flight_id/edit PUT
/flight/:flight_id/delete DELETE
/flight/search GET

## Components:

<App>
    <Navigation/>
    <Footer/> //componentes que no reutilizamos --> los separamos?

<IndexPage/>
    <LoginForm/> (modal)
    <UserForm/> (modal)
    <CompanyForm/> (modal)
    <SearchBox/>
    <DestinationUsersList/>
        <DestinationCard/>
            <DestinationDetails/>  
    <LogoList/>
        <LogoCard/>
    <AdvantegesList/>
        <AdvantageCard/>
            <AdvantageDetails/>
    <Support/>
    <PopularDestinations/>
    <NewsList/>
        <NewsCard/>
            <NewsDetails/> //hay algun api?

<AdminPage/>
    <Counter/>
    <Chart/>
    <MenuAdmin/>
        <UsersList />
            <UserCard /> 
                <UserDetails/>
        <CompaniesList />
            <CompanyCard />
                <CompanyDetails/>
        <FlightsList />
            <FlightCard />
                <FlightDetails/>
        <DestinationsAdminList />
            <DestinationCard />
                <DestinationDetails/>
        <AirportsList />
            <AirportCard />
                <AirportDetails/>


Paleta de colores

azul :  #1f2745
rgba(31,39,70,255)

rosado : #ba2077
rgba(182,28,115,255)

letras celestes :  #22a9bf
rgba(34,169,191,255)

gris : #f3f4f7
rgba(243,244,247,255)




