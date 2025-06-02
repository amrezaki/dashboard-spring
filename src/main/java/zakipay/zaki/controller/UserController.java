package zakipay.zaki.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zakipay.zaki.model.User;
import zakipay.zaki.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*") // autorise React à faire des requêtes
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
