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
- /admin/:user_id/edit PUT
- /admin/:user_id/delete DELETE 


### user.routes.js
Authorization!!!
- /user/edit GET 
- /user/edit PUT
- /user/delete DELETE
OWNER
- /user/review_id/edit PUT
- /user/review_id/delete DELETE

### company.routes.js
- /company/edit GET 
- /company/edit PUT
- /company/delete DELETE

### destinations.routes.js
- /destinations GET

- /destination/:destination_id/details GET
- /destination/:destination_id/edit GET
- /destination/:destination_id/edit PUT
- /destination/:destination_id/delete DELETE


### airport.routes.js
- /airports GET
- /airport/:airport:_id/edit GET
- /airport/:airport:_id/edit PUT
- /airport/:airport:_id/delete DELETE

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






