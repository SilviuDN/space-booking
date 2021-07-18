# Space Booking
## A space flights booking platform by Alexander Marino, Salvador Gallego y Silviu Dilimot

## Enpoints:

### auth.routes.js
- /signup POST 
- /login POST 
- /logout GET
- /isLoggedIn POST

### admin.routes.js 

- /admin/users-list GET
- /admin/:user_id/edit GET
- /admin/:user_id/edit POST
- /admin/:user_id/delete DELETE 


### user.routes.js
Authorization!!!
- /user/edit GET 
- /user/edit POST
- /user/delete DELETE
OWNER
- /user/review_id/edit POST
- /user/review_id/delete DELETE

### company.routes.js
- /company/edit GET 
- /company/edit POST
- /company/delete DELETE

### destinations.routes.js
- /destinations GET


- /destination/:destination_id/details GET
- /destination/:destination_id/edit GET
- /destination/:destination_id/edit POST
- /destination/:destination_id/delete DELETE


### airport.routes.js
- /airports GET
- /airport/:airport:_id/edit GET
- /airport/:airport:_id/edit POST
- /airport/:airport:_id/delete DELETE

//PARA LA COMPANIA DE VUELOS 
flight.routes.js
/flight/new POST
/flight/:flight_id/edit GET
/flight/:flight_id/edit POST
/flight/:flight_id/delete


## Components:
<IndexPage/>
    <Navigation/>
        <LoginForm/> (modal)
        <UserForm/> (modal)
        <CompanyForm/> (modal)
    <Footer/>

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
        <LocationsList />
            <LocationCard />
                <LocationDetails/>
        <AirportsList />
            <AirportCard />
                <AirportDetails/>






