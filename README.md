# Space Booking

## A space flights booking platform by Alexander Marino, Salvador Gallego y Silviu Dilimot

## Enpoints:

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


-   /company/edit GET ----> 
-   /company/edit PUT
-   /company/delete DELETE

### destinations.routes.js

-   /destinations GET

-   /destination/:destination_id/details GET
-   /destination/:destination_id/edit GET
-   /destination/:destination_id/edit PUT
-   /destination/:destination_id/delete DELETE

### airport.routes.js

-   /airports GET
-   /airport/:airport:\_id/edit GET
-   /airport/:airport:\_id/edit PUT
-   /airport/:airport:\_id/delete DELETE

### flight.routes.js

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
