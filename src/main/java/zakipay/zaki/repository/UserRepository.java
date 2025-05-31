package zakipay.zaki.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import zakipay.zaki.model.User;

public interface UserRepository extends MongoRepository<User, String> {
}
