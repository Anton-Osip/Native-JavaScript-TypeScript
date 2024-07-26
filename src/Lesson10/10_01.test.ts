import {
    hairdresser,
    LaptopType,
    moveUser,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";


test("Reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 20
        }
    }

    const awesomeUser: UserType = hairdresser(user, 2);

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);


})

test("Change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 20
        },
        laptop: {title: "ZenBook"}
    }

    const movedUser: UserWithLaptopType = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(movedUser.address.city).toBe("Kiev");
    expect(user.address.city).toBe("Minsk");
    expect(user.laptop).toBe(movedUser.laptop);

})

test("Upgrade laptop to MacBook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 20
        },
        laptop: {title: "ZenBook"}
    }

    const upgradeUserWithMacBook: UserWithLaptopType = upgradeUserLaptop(user, 'MacBook');

    expect(user).not.toBe(upgradeUserWithMacBook);
    expect(user.address).toBe(upgradeUserWithMacBook.address);
    expect(user.laptop).not.toBe(upgradeUserWithMacBook.laptop);

    expect(upgradeUserWithMacBook.laptop.title).toBe("MacBook");
    expect(user.laptop.title).toBe("ZenBook");
    expect(user.address).toBe(upgradeUserWithMacBook.address);

})

