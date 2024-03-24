
export const getUserLocation = async(): Promise<[number, number]> => {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.longitude, coords.latitude,]);
            },
            (err) => {
                alert('Error getting location');
                console.log(err);
                reject(err);
            }
        )
    })

}